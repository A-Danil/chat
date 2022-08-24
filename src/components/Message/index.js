import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';
import { Time, IconReaded } from '../';
import {convertCurrentTime} from 'utils/helper';


import './Message.scss';

const MessageAudio = ({audioSrc}) => {
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const tooglePlay = () =>{
    if(!isPlaying){
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  }

  useEffect(()=>{
    audioElem.current.addEventListener("playing", () => {
      setIsPlaying(true)
    }, false);

    audioElem.current.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }, false);

    audioElem.current.addEventListener("pause", () => {
      setIsPlaying(false)
    }, false);

    audioElem.current.addEventListener("timeupdate", () => {
      const duration = (audioElem.current && audioElem.current.duration )|| 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100)
    });
  }, []);

  return (
    <div className='message__audio'>
      <audio ref={audioElem} src={audioSrc} preload="auto"/>
      <div className='message__audio-progress' style={{width: progress +"%"}}></div>
      <div className='message__audio-info'>
        <div className='message__audio-btn'>
          <button onClick={tooglePlay}>
            {isPlaying ?  <img src={pauseSvg} alt='pause' /> : <img src={playSvg} alt='play' />}
          </button>
        </div>
        <div className='message__audio-svg'>
          <img src={waveSvg} alt='wave svg' />
        </div>
        <span className='message__audio-duration'>
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  )
}

const Message = ({ avatar, user, text, date, audio, isMe, isReaded, attachments, isTyping }) => {

  
  

  

  return(
    <div className={classNames('message', {
      'message--isme': isMe, 
      'message--is-typing': isTyping,
      'message--image': attachments && attachments.length === 1,
      'message--is-audio': audio
      })}>
      <div className='message__content'>
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className='message__avatar'>
          <img src={avatar} alt={`Avatar ${user.fullname}`}/>
        </div>
        <div className='message__info'>
            {(audio || text || isTyping) && (
                <div className='message__bubble'>
                  {text && <p className='message__text'>{text}</p>}
                  {isTyping && <div className='message__typing'>
                    <span className="circle scaling"></span>
                    <span className="circle scaling"></span>
                    <span className="circle scaling"></span>
                  </div>}
                  {audio && <MessageAudio audioSrc={audio}/>}
                </div>
            )}
            
              {attachments && (
                <div className='message__attachments'>
                  {attachments.map( item => (
                    <div className='message__attachments-item'>
                      <img src={item.url} alt={item.filename}/>
                    </div>
                  ))}
                </div>
              )}

            {date && (
              <span className='message__date'>
                <Time date={date}/>
              </span>
            )}
        </div>
      </div>
    </div>
  )
}

Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  audio: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool
}



export default Message;
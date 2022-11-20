import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
const SongCard = ({ song, i, isPlaying, data }) => {

  const dispatch = useDispatch()
  const activeSong = 'test'
  const handlePauseClick = () => {
    dispatch(PlayPause(false))
  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, i, data }))
    dispatch(PlayPause(true))
  }
  return (

    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group '>
        <div className={`absolute inset-0 bg-opacity-50 justify-center items-center bg-black group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt='img-song' src={song.images?.coverart} />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white'>
          <Link to={`/song/${song?.key}`}>
            {song.title}</Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1 '>
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}</Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;

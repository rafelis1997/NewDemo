import './styles.css';

export function ModelViewer() {
  return (
      <model-viewer 
        src="Animado.glb"
        alt="A model of me"
        shadow-intensity="1"
        camera-controls
        auto-play
        animation-name="waving"
        auto-rotate 
        ar
      >
        <button 
          className='absolute bottom-14 left-1/2 transform -translate-x-1/2 font-bold text-xl text-slate-50 py-4 px-8 rounded-md bg-[#6e5dcf]'
          slot='ar-button'
        >
          Activate AR
        </button>
      </model-viewer>
  )
} 
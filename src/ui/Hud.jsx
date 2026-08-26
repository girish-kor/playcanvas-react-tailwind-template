export default function Hud({ score, health }) {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
      <div className="flex justify-between">
        <span className="text-white font-bold text-xl drop-shadow">Score: {score}</span>
        <span className="text-white font-bold text-xl drop-shadow">Health: {health}</span>
      </div>
      <button
        className="pointer-events-auto self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => console.log('paused')}
      >
        Pause
      </button>
    </div>
  )
}

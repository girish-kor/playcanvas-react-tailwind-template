export default function StartScreen({ onStart }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/70 text-white">
      <h1 className="text-3xl font-bold">PlayCanvas + React Template</h1>
      <button
        className="pointer-events-auto bg-blue-600 px-6 py-3 rounded text-lg hover:bg-blue-700"
        onClick={onStart}
      >
        Start
      </button>
    </div>
  )
}

import { useState } from 'react'

type Task = { id: number; label: string; done: boolean }

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [draft, setDraft] = useState('')
  
  function addTask() {
    const label = draft.trim()
    if (!label) {
      return
    }
    setTasks((prev) => [...prev, { id: Date.now(), label, done: false }])
    setDraft('')
  }

  function toggleDone(id: number) {
    setTasks((prev) =>
    prev.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task,
    ),
  );
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id != id))
  }

  return (
    <main className="flex flex-1 flex-col px-5 py-8 text-left">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--text-h)] md:text-4xl">
        Declutter checklist
      </h1>
      
      <div
        className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-4 text-sm text-[var(--text)]"
        aria-label="Next step placeholder">

      <div className="mt-4 flex flex-wrap gap-2">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-label="New task"
          />
          <button type="button" onClick={addTask}>
            Add
          </button>
        </div>
        
      </div>

      <ol className="mt-6 list-decimal space-y-1 pl-5">
        {tasks.map((t) => (
          <li key={t.id}>
          <label>
            <input type="checkbox" 
            checked={t.done} 
            onChange={() => toggleDone(t.id)} 
            />
            <span>{t.label}</span>
            <button type="button" onClick={() => deleteTask(t.id)} aria-label={ `Delete ${t.label}` }>
              Delete
            </button>
        </label>
        </li>
      ))}
      </ol>

    </main>
  )
}

export default App

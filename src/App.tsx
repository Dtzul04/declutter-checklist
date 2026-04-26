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
    )
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <main className="flex flex-1 flex-col px-5 py-8 text-left">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--text-h)] md:text-4xl">
        Declutter checklist
      </h1>
      <p className="mt-2 max-w-prose text-[var(--text)]">
        Add tasks below. Check them off or delete when you’re done.
      </p>

      <div
        className="mt-6 max-w-lg rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-4"
        aria-label="Add a task"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <input
            className="min-h-[2.5rem] w-full min-w-0 flex-1 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text-h)] shadow-sm outline-none placeholder:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Type a task…"
            aria-label="New task"
          />
          <button
            type="button"
            className="min-h-[2.5rem] shrink-0 rounded-md border-2 border-transparent bg-[var(--accent-bg)] px-4 py-2 font-medium text-[var(--accent)] hover:border-[var(--accent-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>

      {tasks.length === 0 ? (
        <p className="mt-6 text-sm text-[var(--text)]">
          No tasks yet — add one above.
        </p>
      ) : (
        <ol className="mt-6 max-w-lg list-decimal space-y-3 pl-5 text-[var(--text-h)]">
          {tasks.map((t) => (
            <li key={t.id}>
              <div className="flex flex-wrap items-center gap-2">
                <label className="flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1 accent-[var(--accent)]"
                    checked={t.done}
                    onChange={() => toggleDone(t.id)}
                  />
                  <span
                    className={
                      t.done ? 'text-[var(--text)] line-through opacity-80' : ''
                    }
                  >
                    {t.label}
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-[var(--text)] underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--text-h)]"
                  onClick={() => deleteTask(t.id)}
                  aria-label={`Delete ${t.label}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </main>
  )
}

export default App

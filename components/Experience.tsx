import { education, experience } from '@/lib/content'

export default function Experience() {
  return (
    <ol data-reveal className="relative">
      {experience.map((r) => (
        <li
          key={r.org + r.period}
          className="grid grid-cols-1 gap-1 border-b border-dashed border-line py-5 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-6"
        >
          <p className="meta flex items-center gap-2 pt-1 tabular-nums">
            {r.current ? <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ok" /> : null}
            {r.period}
          </p>
          <div>
            <h3 className="text-text-hi">
              <span className="font-serif text-[22px] leading-none">{r.org}</span>
              <span className="ml-2 text-[14px] text-text-md">{r.role}</span>
            </h3>
            <p className="mt-1.5 text-[14px] text-text-md">{r.detail}</p>
          </div>
        </li>
      ))}
      <li className="grid grid-cols-1 gap-1 pt-5 sm:grid-cols-[150px_1fr] sm:gap-6">
        <p className="meta pt-1">Education</p>
        <div>
          <h3 className="text-[15px] text-text-hi">{education.degree}</h3>
          <p className="mt-1 text-[14px] text-text-md">{education.school}</p>
        </div>
      </li>
    </ol>
  )
}

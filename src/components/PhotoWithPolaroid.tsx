import PhotoPlaceholder from './PhotoPlaceholder'

interface PhotoWithPolaroidProps {
  mainFilename: string
  mainCaption: string
  polaroidFilename: string
  polaroidCaption: string
  reverse?: boolean
}

export default function PhotoWithPolaroid({
  mainFilename,
  mainCaption,
  polaroidFilename,
  polaroidCaption,
  reverse = false,
}: PhotoWithPolaroidProps) {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <PhotoPlaceholder
        tone="blush"
        shape="rect"
        filename={mainFilename}
        caption={mainCaption}
        className="aspect-[4/5] w-full"
      />
      <div
        className={`absolute -bottom-8 w-32 rotate-[-6deg] rounded-sm bg-white p-2 shadow-xl sm:w-36 ${
          reverse ? '-left-6 rotate-[6deg]' : '-right-6'
        }`}
      >
        <PhotoPlaceholder
          tone="wedding"
          shape="polaroid"
          filename={polaroidFilename}
          className="aspect-square w-full"
        />
        <p className="mt-2 text-center font-display-italic text-xs text-charcoal/70">
          {polaroidCaption}
        </p>
      </div>
    </div>
  )
}

import Feed from './Feed'

const feeds = [
  {
    author: 'João Pedro',
    date: 'Ceara, 15 MIUTOS ATRÁS',
    caption: 'Imagem de notebook #vscode #developer',
    liked: { names: ['Luan Wesley'], count: 6232 },
    comments: 277
  },
  {
    author: 'Moises Felipe',
    date: 'Ceara, 37 MIUTOS ATRÁS',
    caption: 'Imagem de notebook #vscode #developer',
    liked: { names: ['João Pedro', 'Luan Wesley'], count: 6232 },
    comments: 277
  },
  {
    author: 'Luan Wesley',
    date: 'Ceara, 53 MIUTOS ATRÁS',
    caption: 'Imagem de notebook #vscode #developer',
    liked: { names: ['João Pedro'], count: 6232 },
    comments: 277
  }
]

const Feeds = () => {
  return (
    <>
      {feeds.map((feed, index) => (
        <Feed key={index} {...feed} />
      ))}
    </>
  )
}

export default Feeds

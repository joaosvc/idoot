import { AiOutlineComment } from 'react-icons/ai'
import { GoBookmark } from 'react-icons/go'
import { GoShareAndroid } from 'react-icons/go'
import { BiHeart } from 'react-icons/bi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import RoundedProfile from '@/components/RoundedProfile'

interface FeedProps {
  author: string
  date: string
  caption: string
  liked: { names: string[]; count: number }
  comments: number
}

const Feed = ({ author, date, caption, liked, comments }: FeedProps) => (
  <div className="bg-white rounded-card p-card mt-4 mb-4 text-sm leading-6">
    <div className="flex justify-between">
      <div className="flex flex-row gap-4 cursor-pointer">
        <RoundedProfile src="default-profile.jpg" />

        <div className="flex flex-col">
          <h3 className="text-base font-semibold">{author}</h3>
          <small className="text-xs">{date}</small>
        </div>
      </div>
      <div className="cursor-pointer">
        <HiOutlineDotsHorizontal size={15} />
      </div>
    </div>

    <div className="mt-3 rounded-card overflow-hidden cursor-pointer">
      <img src="default-feed.jpg" alt="Feed Image" />
    </div>

    <div className="flex justify-between items-center m-2">
      <div className="flex flex-row gap-[0.4rem]">
        <BiHeart className="cursor-pointer" size={22} />
        <AiOutlineComment className="cursor-pointer" size={22} />
        <GoShareAndroid className="cursor-pointer" size={22} />
      </div>
      <div>
        <GoBookmark className="cursor-pointer" size={22} />
      </div>
    </div>

    <div className="flex flex-row">
      <div className="flex flex-row">
        {['profile/profile-2.jpg', 'profile/profile-3.jpg', 'profile/profile-4.jpg'].map(
          (profile) => (
            <span className="w-6 h-6 block rounded-full overflow-hidden border-2 border-solid border-white -ml-[0.6rem] first:ml-0">
              <img src={profile} alt="Profile" key={profile} />
            </span>
          )
        )}
      </div>
      <p>
        Curtido por <b>{liked.names.join(', ')}</b> e {liked.count.toLocaleString('pt-BR')} outras
        pessoas
      </p>
    </div>

    <div>
      <p>
        <b>{author}</b> {caption}
      </p>
    </div>
    <div className="text-gray cursor-pointer">ver todos os {comments} comentários</div>
  </div>
)

export default Feed

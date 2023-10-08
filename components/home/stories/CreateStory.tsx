'use client'

import RoundedProfile from '@/components/RoundedProfile'
import { useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai'

const CreateStory = () => {
  const [isPosting, setPosting] = useState(false)
  const [lettersAmount, setLettersAmount] = useState(0)
  const [maxLetters] = useState(100)

  const LoadedContent = () => {
    if (isPosting) {
      return (
        <div className="m-2 mb-3">
          <div className="h-36 flex flex-row space-x-3 w-full overflow-auto pb-3">
            <img className="h-full w-auto rounded-md" src="default-feed.jpg" alt="Story Content" />
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <form
        className="w-full mt-4 pt-[0.4rem] pb-[0.4rem] pl-4 pr-4 bg-white rounded-btn"
        onClick={() => !isPosting && setPosting(true)}
        onBlur={() => isPosting && setPosting(false)}>
        <LoadedContent />

        <div className="flex flex-row mt-[0.1rem] items-start justify-between">
          <RoundedProfile src="default-profile.jpg" className="mt-[0.2rem]" />

          <div
            className={`flex flex-row w-full mb-1 ml-2 mr-2 pl-3 pt-2 pb-2 rounded-card overflow-hidden 
            transition-all ease-out duration-150 ${
              isPosting
                ? 'border-[0.1rem] border-light border-solid overflow-y-auto h-[6.4rem]'
                : 'h-9'
            }`}>
            <textarea
              className="w-full h-full resize-none outline-none border-none bg-transparent text-dark text-sm"
              placeholder="No que você está pensando?"
              id="create-post"
              maxLength={maxLetters}
              onChange={(e) => setLettersAmount(e.target.value.length)}
            />

            {isPosting && (
              <div className="flex flex-col justify-between float-right">
                <div className="flex items-end justify-end mr-3 ml-3">
                  <AiOutlineCamera className="cursor-pointer" size={21} />
                </div>

                <div className="ml-2 mb-1 mt-2 mr-3">
                  <span className="text-xs">
                    {lettersAmount}/{maxLetters}
                  </span>
                </div>
              </div>
            )}
          </div>
          <input
            type="submit"
            value="Post"
            className="inline-block p-btn font-medium cursor-pointer rounded-btn duration-300 
          transition-all ease-out hover:opacity-80 text-sm bg-primary text-white"
          />
        </div>
      </form>
    </>
  )
}

export default CreateStory

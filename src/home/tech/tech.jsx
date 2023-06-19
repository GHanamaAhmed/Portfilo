import { memo } from 'react';
import TitleSection from '../titleSection';
import Skills from './skills';
export default memo(function Tech() {
  return (
    <div className='w-full flex flex-col items-center'>
      <TitleSection title={"My Tech Stack"} subTitle={"Technologies I’ve been working with recently"} textAlign={"items-center"} />
      <Skills className={"w-4/6 gap-10 py-7"} />
    </div>
  )
})
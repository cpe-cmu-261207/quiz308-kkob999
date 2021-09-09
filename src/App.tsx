import React from 'react';
import logo from './logo.svg';
import './App.css';
import { comments, CommentType } from './data/comments';
import ComputeLike from './data/comment';
import computeRepile from './data/repile';




function App() {
  const arrayComment = comments

  const num = (props: CommentType) => {
    if (props.likeNum > 0) {
      return props.likeNum
    }
    else{
      return 0
    }
  }
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/bird.png"></img>
            <span className='font-semibold text-lg text-white'>Chommanee Rujijanakul 630610725</span>
          </div>

          {/* status message */}
          <p className='text-white'>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>100 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">

          {/* normal comment */}




          <ComputeLike username={"lisa"} userImagePath={'/profileImages/lisa.jpg'} commentText={'จริงค่า'} likeNum={999}
            replies={
              [

              ]
            } />
          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">หมาน้อย</p>
              <p className='text-white'>เม้นค้าบ</p>
            </div>
          </div>
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/popcat.png"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">แมวตัวหนึ่ง</p>
              <p className='text-white'>ลิซ่าาาาาาา</p>
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>2 คน</p>
              </div>
            </div>
          </div>
          <ComputeLike username={"Charlie Brown"} userImagePath={'/profileImages/charliebrown.jpg'} commentText={'บ้าไปแล้ว'} likeNum={207}
            replies={
              [

              ]

            } />




        </div>

      </div>
    </div>
  );
}

export default App;

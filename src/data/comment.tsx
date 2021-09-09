import { stat } from 'fs';
import React, { useState } from 'react';
import { comments,CommentType } from './comments';


const ComputeLike = (props: CommentType) => {

    
    return(
        <div>
            <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src= {props.userImagePath} ></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{props.username}</p>
              <p className='text-white'>{props.commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>{props.likeNum} คน</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ComputeLike
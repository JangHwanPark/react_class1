import React from 'react';
import LikeButton from "./LikeButton";
import {Link} from "react-router-dom";

/**
 * PostList 컴포넌트는 주어진 게시물 목록을 표시
 * 각 게시물은 이미지, 제목, 날짜가 포함되며, 좋아요 버튼을 포함.
 *
 * @param {Object} props - 컴포넌트에 전달되는 모든 프로퍼티
 * @param {Array} props.posts - 게시물 객체의 배열, 각 객체는 게시물의 id, img URL, 제목, 날짜를 포함.
 * @param {Array} props.like - 각 게시물에 대한 좋아요 상태를 나타내는 boolean 배열
 * @param {Function} props.setLike - 좋아요 배열 상태를 업데이트하는 함수
 */
export default function PostList({...rest}) {
    // 구조 분해 할당을 사용하여 props에서 필요한 값들을 추출
    const {posts, like, setLike} = rest;

    /**
     * handleToggleLike는 특정 게시물에 대한 좋아요 상태를 토글함.
     * @param {number} index - 좋아요 상태를 토글할 게시물의 인덱스
     */
    const handleToggleLike = (index) => {
        const newLikes = [...like];  // 기존 좋아요 상태 배열을 복사
        newLikes[index] = !newLikes[index];   // 해당 인덱스의 좋아요 상태를 반전
        setLike(newLikes);                    // 좋아요 상태 업데이트
    };

    return (
        <ul className="post-list grid">
            {posts.map((post, index) => (
                <li key={post.id} className="post-item">
                    <Link to={`/posts/${post.id}/${post.title}`}>
                        <div className="img-wrap">
                            <img src={post.img} alt="블로그 타이틀 이미지"/>
                        </div>
                        <h4>{post.title}</h4>
                    </Link>
                    <div className="info-wrap flex item-center">
                        <p className="date">{post.date}</p>
                        <LikeButton like={like[index]} onToggle={() => handleToggleLike(index)}/>
                    </div>
                </li>
            ))}
        </ul>
    );
}
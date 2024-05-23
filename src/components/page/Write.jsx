import React from 'react';
import PageLayout from "./PageLayout";
import {useNavigate} from "react-router-dom";

export default function Write() {
    const navigate = useNavigate();
    const date = new Date();

    const handleClick = (e) => {
        e.preventDefault();
        alert("서버가 존재하지 않습니다.");
    }

    const handleClickNavigate = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <PageLayout>
            <div className="write-wrap">
                <form action="" className="form-write">
                    <input
                        type="text"
                        className="input-title"
                        placeholder="제목을 입력하세요."
                    />
                    <div className="write-date">
                        {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
                    </div>
                    <textarea
                        className="text-body"
                        placeholder="본문을 작성해주세요."
                    />
                    <div className="button-wrap flex justify-between">
                        <button onClick={handleClickNavigate}>돌아가기</button>
                        <div className="button-submit">
                            <button onClick={handleClick}>임시저장</button>
                            <button onClick={handleClick}>게시하기</button>
                        </div>
                    </div>
                </form>
            </div>
        </PageLayout>
    );
}
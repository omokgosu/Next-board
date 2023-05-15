

export default function Write(){

    return (
        <div className="p-20">
            <h4>글작성</h4>

            <form action="/api/post/new" method="POST">
                <input name="title" type="text" placeholder="글제목" />
                <input name="content" type="text" placeholder="글내용" />
                <button type="submit">글작성버튼</button>
            </form>
        </div>
    )
}
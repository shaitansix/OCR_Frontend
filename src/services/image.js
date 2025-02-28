/* localhost*/
// const BASE_URL = 'http://127.0.0.1:8000/image'

/* render */
const BASE_URL = 'https://ocr-backend-t90p.onrender.com/image'
const EXTRACT_TEXT_URL = `${BASE_URL}/extract_text`

export const extractText = async (data) => {
    const res = await fetch(EXTRACT_TEXT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    const resData = await res.json()
    return resData.data
}
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'size',
    'video',
    'align',
    'background',
    'direction',
    'code-block',
    'code',
]

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ['link', 'image'],
    ],
}

export default function RichTextEditor({ value, onChange }: any) {
    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            style={{ height: 150, marginBottom: 100, direction: 'ltr' }}
            formats={formats}
            value={value}
            onChange={onChange}
        />
    )
}
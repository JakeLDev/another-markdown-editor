import React, {useCallback, useEffect} from "react";
import useCodeMirror from "../use-codemirror";
import "./Editor.css";

interface Props {

}

const Editor: React.FC<Props> = (props) => {
    const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
        initialDoc: "Hello, World!",
        onChange: () => {
            // Do something
        }
    })

    useEffect(() => {
        if (editorView){
            // Do something
        }
    }, [editorView])

    return <div className="editor-wrapper" ref={refContainer}>Editor</div>
}

export default Editor;
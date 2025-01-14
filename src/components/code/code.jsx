import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({codestring}) => {
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
        {codestring}
      </SyntaxHighlighter>
    )
}

export default Code
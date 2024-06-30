import './TypingTextBox.css'
import { TypeAnimation } from 'react-type-animation';

// function TypingTextBox() {
//     return (
//         <div class="typing-text">
//             <p>Programmer</p>
//         </div>
//     );
// }

const TYPING_TEXT_CLASS = 'typing-text';

function TypingTextBox() {
    return (
        <TypeAnimation
            className={TYPING_TEXT_CLASS}
            sequence={[
                'Programmer',
                1000, // Waits 1s
                'F1 Enthusiast', 
                1000, 
                'Avid Reader',
                1000,
                'A Happy Guy :)',
                1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
    );
}

export default TypingTextBox
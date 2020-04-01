import Link from "next/link";
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const Button = (props) => {
    if(props.type === 'link') {
        return (
            <Link href={props.href} as={props.as}>
                <button css={styles.button}>
                    {props.title}
                </button>
            </Link>
        );
    }else{
        return (
            <button
                css={styles.button}
                onClick={props.handleOnCLick}
            >
                {`${props.title} ${props.qty >=0 ? `(${props.qty})` : ''}`}
            </button>
        );
    }
}
const styles = {
    button: css`
    background: #f46b41;
    color: #fff;
    border: none;
    width: 150px;
    padding: 10px;
    margin: 10px 5px 5px 5px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    `
  }
export default Button;
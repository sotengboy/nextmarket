/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions/catalogFilterAction";

const Filter = ({filter, setFilter}) => {
    const _handleChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }
    return (
        <select name="category" onChange={_handleChange} value={filter} css={styles.filter}>
            <option value="all">--All--</option>
            <option value="baru">Mesin Fotocopy Baru</option>
            <option value="rekondisi">Mesin Fotocopy Rekondisi</option>
        </select>
    );
}

const mapStateToProps = state => ({
    filter: state.catalogFilter
});

const mapDispatchToProps = dispatch => ({
    setFilter: (filter) => dispatch(setFilter(filter))
})
const styles = {
    filter: css`
    margin-right: 20px;
    height: 40px;
    padding: 10px;
    width: 300px;
    float: left
  `
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
import styled from "styled-components";

export default styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 1 1 150px;
@media (max-Width:1000px){
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-end;
        align-content: end;
        float: right;
        margin-top: 200px;
        margin-right: 100px;
}
`
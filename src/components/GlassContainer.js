import styled from "styled-components";

const GlassContainer = styled.div`
    display: flex;
    color: white;
    
    &:hover {
        background: rgba( 255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        color: white;
    }
    
`;

export default GlassContainer;

/**
 *
 */
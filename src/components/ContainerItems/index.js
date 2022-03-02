import react from 'react';

import { ContainerItems as Container} from './style'

function ContainerItems({children, isBlur}){

    return <Container isBlur={isBlur}>{children}</Container>
}

export default ContainerItems
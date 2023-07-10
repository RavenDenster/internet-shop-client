import {observer} from 'mobx-react-lite'
import ListGroup from 'react-bootstrap/ListGroup';
import {Context} from '../index'
import { useContext } from 'react';

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
    <ListGroup>
        {device.types.map(type => 
            <ListGroup.Item 
                style={{cursor: 'poiter'}}
                active={type.id === device.selectedType.id}
                onClick={() => device.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
        )}
    </ListGroup>
    )
})

export default TypeBar
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div>
            <h5>Quick Links</h5>
            <ListGroup>
                <ListGroup.Item action href="/news">
                    Latest News
                </ListGroup.Item>
                <ListGroup.Item action href="/profile">
                    Village Profile
                </ListGroup.Item>
                <ListGroup.Item action href="/gallery">
                    Gallery
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Sidebar;

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalDetail = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {data} = props;

  return (
    <div>
      <Button color="danger" block onClick={toggle}>Detail</Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h2>{data.title}</h2>
          <img src={data.urlToImage} alt="" className="img-fluid mb-4" />
          {data.content}
          <br/>
          <a href={data.url} className="btn btn-outline-info mt-3">Source</a>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalDetail;
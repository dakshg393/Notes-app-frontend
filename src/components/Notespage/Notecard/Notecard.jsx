import { Button, Card, CardBody, Flex, Heading, Input, Text, Textarea, VStack, useDisclosure } from "@chakra-ui/react"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


import "./style.css"
import notebg from "../../../assets/note_bg.png"
import { useDispatch } from "react-redux"
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions"
import { useRef, useState } from "react"


export default function NoteCard({ title, body, User, date, _id }) {
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [newtitle, setTitle] = useState(title);
    const [newbody, setBody] = useState(body);
    // const [newdate, setDate] = useState(Date.now());
    const moment = require('moment');

    const updateNote = () => {
        dispatch(updateNotes(_id, { title: newtitle, body: newbody,date:Date.now()}))
        onClose()
    }

    const deleteNote = () => {
        dispatch(deleteNotes(_id))

    }

    const bgcolor = ["#FFD700", "#ADD8E6", "#98FB98", "#FFB6C1", "#FFFFE0", "#E0FFFF", "#FFA07A", "#B0E0E6", "#F0FFF0", "#F0E68C", "#87CEEB", "#FFE4E1", "#F5DEB3", "#FAFAD2", "#AFEEEE", "#FFEBCD", "#FFDAB9", "#FFFACD", "#F0F8FF", "#FAEBD7", "#FFE4B5", "#FFEFDB", "#FFEFD5", "#FAF0E6"];

    // const randomElement = bgcolor[Math.floor(Math.random() * myArray.length)]; 

    return <Card backgroundColor={bgcolor[Math.floor(Math.random() * bgcolor.length)]} >
        <CardBody>
            <VStack>
                <Heading color={"black"}>{title}</Heading>
                <Text color={"black"}>{body}</Text>

                <Flex gap={2}>


                    <>
                        <Button bg={"white"} color={"black"} onClick={onOpen}>Update</Button>

                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Update Note</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>

                                    <Input value={newtitle} onChange={(e) => setTitle(e.target.value)}></Input>
                                    <Textarea mt={8} value={newbody} onChange={(e) => setBody(e.target.value)}></Textarea>
                                   
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={updateNote}>
                                        Update
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>




                    <Button onClick={deleteNote} bg={"white"} color={"black"} >Delete</Button>
                    <br></br>
                    
                </Flex>

                <p color={"black"}><small color={"black"}>
                        {moment(date).format('hh:mm A DD/MM/YYYY')}
                    </small></p>

            </VStack>
        </CardBody>
    </Card>

}
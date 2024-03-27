import { Box, Button, Grid, IconButton, Input, StepTitle, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import NoteCard from "../components/Notespage/Notecard/Notecard";
// import { BsPlus } from "react-icons/bs";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/config";
import axios from "axios";

export default function NotesPage() {

    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.noteReducer);
    console.log(data);
    const [notes, setNotes] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")



    useEffect(() => {
        dispatch(getNotes());
    }, []);

    useEffect(() => {
        setNotes(data)
    }, [data])


    const createNote =()=>{
        dispatch(createNotes({title,body,date:Date.now()}))
        onClose()
    }
    

    return <Box mt={20} padding={8}>

        <Grid gap={10} w={"90%"} margin={"auto"} gridTemplateColumns="repeat(4,1fr)">

            {notes?.map((e1) => <NoteCard {...e1} />)}

        </Grid>


        <>
            <IconButton boxShadow={"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"} position={"fixed"} h={"80px"} w={"80px"} borderRadius={50} bottom={0} right={0} margin={16} bgColor={"aqua"} onClick={onOpen}  ></IconButton>
            

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <Input value={title} placeholder={"Please Enter Title"} onChange={(e)=>setTitle(e.target.value)}></Input>
                        <Textarea mt={8} value={body} placeholder={"Write Your Note Here" } onChange={(e)=>setBody(e.target.value)}></Textarea>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={createNote}>
                            Create
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>


    </Box>
}
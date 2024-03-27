import { Box, Heading, Image ,Text } from "@chakra-ui/react";
import note from "../assets/note.jpg"
export default function Homepage() {

    return <Box padding={8}>

        <Image position={'absolute'} right={0} w={500} src={note} />
        <Heading mt={'16'} textAlign={"start"} size={"4x1"}>
            NoteMate: Your Digital Notebook Companion
        </Heading>
        <Text mt={8} maxW={"50%"} textAlign={"justify"}>
            SecureNote is your go-to destination for secure and efficient note-taking, prioritizing both usability and privacy. Our mission is straightforward: to empower users to manage their digital lives confidently. With industry-leading encryption and stringent security measures, your data is safeguarded against unauthorized access at all times. We prioritize seamless user experiences, offering an intuitive interface and seamless synchronization across devices, ensuring your notes are always at your fingertips. Whether it's jotting down quick reminders or drafting detailed project plans, SecureNote provides the flexibility and versatility to suit your needs, including rich text formatting and robust search capabilities. Our dedicated team of professionals, with expertise in software development, cybersecurity, and user experience design, continuously strives for innovation and excellence. We value your feedback and welcome any questions or suggestions you may have. Contact us at contact@email.com to share your thoughts. Thank you for choosing SecureNote as your trusted partner in organizing your thoughts and memories securely. Join us today and take control of your digital life with confidence.

        </Text>
    </Box>


}
// src/screens/AIBitacora.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updatePetProfile } from '../store/petSlice';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const questions = [
  { field: 'nombre', question: '¿Cuál es el nombre de tu mascota?' },
  { field: 'especie', question: '¿Qué especie es tu mascota? (Perro, gato, etc.)' },
  { field: 'raza', question: '¿Cuál es la raza de tu mascota?' },
  { field: 'edad', question: '¿Cuántos años tiene tu mascota?' },
  { field: 'sexo', question: '¿Es macho o hembra?' },
  { field: 'color', question: '¿De qué color es su pelaje?' },
  // Puedes agregar más preguntas para otras secciones
];

const AIBitacora: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedPetId } = useSelector((state: RootState) => state.pets);
  const petId = selectedPetId || 'default_pet'; // Asegúrate de tener un ID válido

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Iniciar la conversación con la primera pregunta
    const firstQuestion = questions[currentQuestionIndex].question;
    setMessages([{ sender: 'ai', text: firstQuestion }]);
  }, []);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      // Agregar el mensaje del usuario
      const userMessage: Message = { sender: 'user', text: inputText };
      setMessages([...messages, userMessage]);

      // Procesar la respuesta y actualizar el perfil
      const currentQuestion = questions[currentQuestionIndex];
      const field = currentQuestion.field;
      const value = inputText.trim();

      // Actualizar el perfil en Redux
      dispatch(
        updatePetProfile({
          id: petId,
          profile: {
            basicInfo: {
              [field]: value,
            },
          },
        })
      );

      setInputText(''); // Limpiar el campo de entrada

      // Preparar la siguiente pregunta o finalizar
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        const nextQuestion = questions[nextIndex].question;
        setTimeout(() => {
          const aiMessage: Message = { sender: 'ai', text: nextQuestion };
          setMessages((prevMessages) => [...prevMessages, aiMessage]);
          setCurrentQuestionIndex(nextIndex);
        }, 500);
      } else {
        // Conversación finalizada
        setTimeout(() => {
          const aiMessage: Message = { sender: 'ai', text: '¡Gracias por proporcionar la información de tu mascota!' };
          setMessages((prevMessages) => [...prevMessages, aiMessage]);
        }, 500);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Ícono de robot en la parte superior */}
      <View style={styles.iconContainer}>
        <MaterialIcons name="smart-toy" size={50} color="blue" />
        <Text style={styles.title}>AIBitacora</Text>
      </View>

      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              message.sender === 'user' ? styles.userContainer : styles.aiContainer,
            ]}
          >
            <Text style={message.sender === 'user' ? styles.userMessage : styles.aiMessage}>
              {message.sender === 'user' ? 'Tú' : 'IA'}: {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Escribe tu respuesta"
      />
      <Button title="Enviar" onPress={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  userContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  aiContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  userMessage: {
    color: '#000',
  },
  aiMessage: {
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default AIBitacora;

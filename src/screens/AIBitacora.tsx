// src/screens/AIBitacora.tsx

import React, { useState, useEffect } from 'react';
import { 
  KeyboardAvoidingView, 
  Platform, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updatePetProfile } from '../store/petSlice';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../styles/theme'; // Importar colors desde theme.ts

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
    <KeyboardAvoidingView 
      style={globalStyles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Ícono de robot en la parte superior */}
      <View style={styles.header}>
        <MaterialIcons name="smart-toy" size={40} color={colors.primary} />
        <Text style={globalStyles.title}>Pawa Bitácora</Text>
      </View>

      <ScrollView style={styles.chatContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              message.sender === 'user' ? styles.userContainer : styles.aiContainer,
            ]}
          >
            <Text style={message.sender === 'user' ? styles.userMessage : styles.aiMessage}>
              {message.sender === 'user' ? 'Tú' : 'Pawa'}: {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Escribe tu respuesta"
          placeholderTextColor="#888"
          accessible={true}
          accessibilityLabel="Campo de entrada de texto"
        />
        <TouchableOpacity 
          style={styles.sendButton} 
          onPress={handleSendMessage} 
          accessible={true} 
          accessibilityLabel="Botón de enviar"
        >
          <MaterialIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messageContainer: {
    maxWidth: '80%',
    marginBottom: 12,
    padding: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userContainer: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderTopRightRadius: 0,
  },
  aiContainer: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 0,
  },
  userMessage: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  aiMessage: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    paddingVertical: 5,
    fontFamily: 'Roboto-Regular',
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AIBitacora;

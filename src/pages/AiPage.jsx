import { useState } from 'react'
import {
    Bot,
    User,
    Send,
    Sparkles,
    Trash2
} from 'lucide-react'

import './css/ChatBotPage.css'

export default function ChatBotPage() {

    const [message, setMessage] = useState('')

    const [messages, setMessages] = useState([
        {
            id: 1,
            role: 'assistant',
            content: 'Xin chào! Mình là QNU AI. Mình có thể giúp gì cho bạn?'
        }
    ])

    function handleSend() {

        if (!message.trim()) return

        const newMessage = {
            id: Date.now(),
            role: 'user',
            content: message
        }

        setMessages([
            ...messages,
            newMessage
        ])

        setMessage('')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    function clearChat() {
        setMessages([])
    }

    return (
        <div className="chatbot-page">

            {/* HEADER */}

            <div className="chatbot-header">

                <div className="chatbot-title">

                    <div className="chatbot-icon">
                        <Bot size={22} />
                    </div>

                    <div>
                        <h2>QNU AI</h2>

                        <span>
                            Trợ lý AI thông minh
                        </span>
                    </div>

                </div>


                <div className="chatbot-actions">

                    <div className="model-badge">
                        <Sparkles size={15} />
                        Qwen 2.5 3B
                    </div>

                    <button
                        className="clear-button"
                        onClick={clearChat}
                        title="Xóa cuộc trò chuyện"
                    >
                        <Trash2 size={18} />
                    </button>

                </div>

            </div>


            {/* CHAT */}

            <div className="chat-container">

                {messages.length === 0 && (

                    <div className="empty-chat">

                        <div className="empty-icon">
                            <Bot size={35} />
                        </div>

                        <h3>QNU AI</h3>

                        <p>
                            Hãy đặt câu hỏi để bắt đầu cuộc trò chuyện.
                        </p>

                    </div>

                )}


                {messages.map((msg) => (

                    <div
                        key={msg.id}
                        className={`message-row ${msg.role}`}
                    >

                        <div className="message-avatar">

                            {msg.role === 'assistant'
                                ? <Bot size={18} />
                                : <User size={18} />
                            }

                        </div>


                        <div className="message-content">

                            <div className="message-name">
                                {msg.role === 'assistant'
                                    ? 'QNU AI'
                                    : 'Bạn'
                                }
                            </div>

                            <div className="message-text">
                                {msg.content}
                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* INPUT */}

            <div className="chat-input-wrapper">

                <div className="chat-input">

                    <textarea
                        value={message}
                        onChange={(e) =>
                            setMessage(e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        placeholder="Nhập câu hỏi cho QNU AI..."
                        rows="1"
                    />

                    <button
                        className="send-button"
                        onClick={handleSend}
                        disabled={!message.trim()}
                    >
                        <Send size={18} />
                    </button>

                </div>

                <p className="chat-warning">
                    QNU AI có thể đưa ra thông tin chưa chính xác.
                    Hãy kiểm tra lại các thông tin quan trọng.
                </p>

            </div>

        </div>
    )
}
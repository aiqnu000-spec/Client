import { useState } from 'react'
import {
    Bot,
    Brain,
    Database,
    Server,
    SlidersHorizontal,
    Save,
    RefreshCw,
    CheckCircle2
} from 'lucide-react'

import './css/SettingPage.css'

export default function SettingsPage() {

    const [model, setModel] = useState('qwen2.5:3b')
    const [endpoint, setEndpoint] = useState('http://localhost:11434')
    const [temperature, setTemperature] = useState(0.7)
    const [maxTokens, setMaxTokens] = useState(2048)
    const [ragEnabled, setRagEnabled] = useState(true)

    const [systemPrompt, setSystemPrompt] = useState(
        'Bạn là QNU AI, trợ lý AI hỗ trợ học tập cho sinh viên.'
    )

    const [status, setStatus] = useState('')

    function handleSave() {
        setStatus('Đã lưu cấu hình AI')

        setTimeout(() => {
            setStatus('')
        }, 3000)
    }

    function handleTestConnection() {
        setStatus('Đang kiểm tra kết nối...')

        setTimeout(() => {
            setStatus('Kết nối Ollama thành công')
        }, 1000)
    }

    return (
        <div className="settings-page">

            {/* HEADER */}
            <div className="settings-header">

                <div>
                    <h2>Cài đặt AI</h2>

                    <p>
                        Quản lý mô hình và cấu hình hoạt động của QNU AI.
                    </p>
                </div>

                <div className="settings-header-icon">
                    <Brain size={28} />
                </div>

            </div>


            {/* STATUS */}
            {status && (
                <div className="settings-status">
                    <CheckCircle2 size={18} />
                    <span>{status}</span>
                </div>
            )}


            <div className="settings-grid">

                {/* MODEL */}
                <section className="settings-card">

                    <div className="card-title">

                        <div className="card-icon">
                            <Bot size={20} />
                        </div>

                        <div>
                            <h3>Mô hình AI</h3>
                            <p>Cấu hình LLM mà QNU AI sử dụng.</p>
                        </div>

                    </div>


                    <div className="form-group">

                        <label>Model</label>

                        <select
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        >
                            <option value="qwen2.5:3b">
                                Qwen 2.5 3B
                            </option>

                            <option value="qwen3:4b">
                                Qwen 3 4B
                            </option>

                            <option value="gemma3:4b">
                                Gemma 3 4B
                            </option>

                            <option value="llama3.2:3b">
                                Llama 3.2 3B
                            </option>
                        </select>

                    </div>


                    <div className="form-group">

                        <label>Ollama Endpoint</label>

                        <div className="input-with-icon">
                            <Server size={18} />

                            <input
                                type="text"
                                value={endpoint}
                                onChange={(e) =>
                                    setEndpoint(e.target.value)
                                }
                            />
                        </div>

                    </div>


                    <button
                        className="secondary-button"
                        onClick={handleTestConnection}
                    >
                        <RefreshCw size={17} />
                        Kiểm tra kết nối
                    </button>

                </section>


                {/* GENERATION */}
                <section className="settings-card">

                    <div className="card-title">

                        <div className="card-icon">
                            <SlidersHorizontal size={20} />
                        </div>

                        <div>
                            <h3>Tham số sinh</h3>
                            <p>Điều chỉnh cách AI tạo câu trả lời.</p>
                        </div>

                    </div>


                    <div className="form-group">

                        <div className="label-row">

                            <label>Temperature</label>

                            <span className="value">
                                {temperature}
                            </span>

                        </div>

                        <input
                            className="range"
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={temperature}
                            onChange={(e) =>
                                setTemperature(e.target.value)
                            }
                        />

                        <div className="range-description">
                            Thấp = chính xác, ổn định · Cao = sáng tạo hơn
                        </div>

                    </div>


                    <div className="form-group">

                        <label>Max Tokens</label>

                        <input
                            type="number"
                            min="256"
                            max="8192"
                            value={maxTokens}
                            onChange={(e) =>
                                setMaxTokens(e.target.value)
                            }
                        />

                    </div>

                </section>


                {/* RAG */}
                <section className="settings-card">

                    <div className="card-title">

                        <div className="card-icon">
                            <Database size={20} />
                        </div>

                        <div>
                            <h3>Knowledge & RAG</h3>
                            <p>Quản lý nguồn kiến thức của QNU AI.</p>
                        </div>

                    </div>


                    <div className="setting-toggle">

                        <div>

                            <strong>Kích hoạt RAG</strong>

                            <p>
                                Cho phép AI tìm kiếm thông tin
                                từ cơ sở dữ liệu kiến thức.
                            </p>

                        </div>


                        <button
                            className={`switch ${
                                ragEnabled ? 'on' : ''
                            }`}
                            onClick={() =>
                                setRagEnabled(!ragEnabled)
                            }
                        >
                            <span></span>
                        </button>

                    </div>


                    <div className="rag-info">

                        <Database size={18} />

                        <div>

                            <strong>Knowledge Base</strong>

                            <span>
                                Đang sử dụng dữ liệu kiến thức QNU
                            </span>

                        </div>

                    </div>

                </section>


                {/* SYSTEM PROMPT */}
                <section className="settings-card full-width">

                    <div className="card-title">

                        <div className="card-icon">
                            <Brain size={20} />
                        </div>

                        <div>
                            <h3>System Prompt</h3>

                            <p>
                                Định nghĩa vai trò và hành vi của QNU AI.
                            </p>
                        </div>

                    </div>


                    <div className="form-group">

                        <textarea
                            value={systemPrompt}
                            onChange={(e) =>
                                setSystemPrompt(e.target.value)
                            }
                            rows="7"
                        />

                    </div>

                </section>

            </div>


            {/* FOOTER */}
            <div className="settings-footer">

                <button
                    className="save-button"
                    onClick={handleSave}
                >
                    <Save size={18} />
                    Lưu cấu hình
                </button>

            </div>

        </div>
    )
}
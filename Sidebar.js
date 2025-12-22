import React from 'react'
import './SIde.css'


function Sidebar() {
  return (
     <div class="sidebar">
                <div class="stats-card">
                    <div class="stats-title">📊 Statistics</div>
                    <div class="stat-item">
                        <span>Total </span>
                        <span class="stat-value" id="stat-total">0</span>
                    </div>
                    <div class="stat-item">
                        <span>Active</span>
                        <span class="stat-value" id="stat-active">0</span>
                    </div>
                    <div class="stat-item">
                        <span>Completed</span>
                        <span class="stat-value" id="stat-done">0</span>
                    </div>
                    <div class="stat-item">
                        <span>High Priority</span>
                        <span class="stat-value" id="stat-high">0</span>
                    </div>
                </div>

                <div class="stats-card">
                    <div class="stats-title">⚡ Actions</div>
                    <div class="action-buttons">
                        <button id="clearDoneBtn">Clear Completed</button>
                        <button id="clearAllBtn" class="btn-danger">Clear All</button>
                    </div>
                </div>
        </div>
  )
}

export default Sidebar

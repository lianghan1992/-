// src/config.ts

/**
 * 开发阶段配置文件
 * 注意：在生产环境中，这些敏感信息应该通过环境变量等更安全的方式进行管理。
 */

// 统一 API 根地址
// 在生产环境中直接指向后端服务器，避免相对路径 '/api' 在没有反向代理的情况下指向前端服务器导致 404
export const API_BASE_URL = 'https://autoinsight_api.jingyu.today:8081/api';

// Full path for the user authentication & subscription service
export const USER_SERVICE_PATH = `${API_BASE_URL}/user`;

// Full path for the main intelligence data service
export const INTELLIGENCE_SERVICE_PATH = `${API_BASE_URL}/crawler`;

// Full path for specific article detail service (Updated)
export const INTELSPIDER_SERVICE_PATH = `${API_BASE_URL}/intelspider`;

// Full path for livestream analysis service
export const LIVESTREAM_SERVICE_PATH = `${API_BASE_URL}/livestream`;

// Full path for competitiveness dashboard service (Legacy admin endpoints & New endpoints unified)
export const COMPETITIVENESS_SERVICE_PATH = `${API_BASE_URL}/competitiveness`;

// Full path for NEW competitiveness analysis service (Knowledge Base)
// Unified with COMPETITIVENESS_SERVICE_PATH as per requirements
export const COMPETITIVENESS_ANALYSIS_SERVICE_PATH = `${API_BASE_URL}/competitiveness`;

// Full path for the document processing service
export const DOCUMENT_PROCESSING_SERVICE_PATH = `${API_BASE_URL}/document-processing`;

// Full path for Deep Insight service
export const DEEP_INSIGHT_SERVICE_PATH = `${API_BASE_URL}/deep_insight`;
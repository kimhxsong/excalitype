export interface TextObjectType {
  id: number;
  type: 'text';
  content: string;
  x: number;
  y: number;
  scale: number;
  fontSize: number; // 월드 단위 폰트 크기
  isAIResponse?: boolean; // AI 답변 여부
  color?: string; // 텍스트 색상
}

export interface A4GuideObjectType {
  id: number;
  type: 'a4guide';
  x: number; // 좌상단 월드 좌표
  y: number;
  width: number; // 월드 단위 크기
  height: number;
}

export type CanvasObjectType = TextObjectType | A4GuideObjectType;

export type Theme = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  grid: string;
  selection: string;
  selectionBorder: string;
  hover: string;
  hoverBorder: string;
  a4Guide: string;
  inputBg: string;
  inputBorder: string;
}

export interface SelectionRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CanvasState {
  canvasObjects: CanvasObjectType[];
  currentTypingText: string;
  isComposing: boolean;
  isDragging: boolean;
  isDraggingText: boolean;
  dragStart: { x: number; y: number };
  scale: number;
  isTyping: boolean;
  selectedObject: CanvasObjectType | null;
  selectedObjects: CanvasObjectType[];
  isSelecting: boolean;
  selectionRect: SelectionRectangle | null;
  isExportMenuOpen: boolean;
  canvasWidth: number;
  canvasHeight: number;
  canvasOffset: { x: number; y: number };
  isSpacePressed: boolean;
  showGrid: boolean;
  showInfo: boolean;
  showShortcuts: boolean;
  showTextBox: boolean;
  theme: Theme;
  baseFontSize: number;
  fontLoaded: boolean;
  pxPerMm: number;
}

export interface ExportData {
  version: string;
  type: string;
  elements: CanvasObjectType[];
  appState: {
    canvasOffset: { x: number; y: number };
    scale: number;
    typewriterPosition: { x: number; y: number };
    showGrid: boolean;
    showTextBox: boolean;
    theme: Theme;
  };
}

export interface AIState {
  isProcessing: boolean;
  error: string | null;
  lastResponse: string | null;
}

export interface AICommand {
  type: 'gpt';
  question: string;
}
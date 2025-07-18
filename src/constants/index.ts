import { ThemeColors } from '../types';

export const INITIAL_FONT_SIZE = 20;
export const TEXT_BOX_WIDTH_MM = 160;
export const A4_MARGIN_LR_MM = 25;
export const A4_MARGIN_TOP_MM = 30;
export const A4_WIDTH_MM = TEXT_BOX_WIDTH_MM + (A4_MARGIN_LR_MM * 2);
export const A4_HEIGHT_MM = A4_WIDTH_MM * (297 / 210);
export const MAX_CHARS_PER_LINE = 52;
export const SCREEN_MARGIN_PX = 25;

export const ZOOM_LEVELS = [0.1, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4, 5];
export const FONT_SIZE_LEVELS = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 56, 64];

export const THEME_COLORS: Record<'dark' | 'light', ThemeColors> = {
  dark: {
    background: '#0a0a0a',
    text: 'rgba(255, 255, 255, 0.9)',
    grid: 'rgba(255, 255, 255, 0.05)',
    selection: 'rgba(59, 130, 246, 0.2)',
    a4Guide: 'rgba(59, 130, 246, 0.3)',
    inputBg: 'rgba(0, 0, 0, 0.3)',
    inputBorder: 'rgba(59, 130, 246, 0.3)',
  },
  light: {
    background: '#ffffff',
    text: 'rgba(0, 0, 0, 0.9)',
    grid: 'rgba(0, 0, 0, 0.05)',
    selection: 'rgba(59, 130, 246, 0.2)',
    a4Guide: 'rgba(59, 130, 246, 0.4)',
    inputBg: 'rgba(255, 255, 255, 0.4)',
    inputBorder: 'rgba(59, 130, 246, 0.4)',
  }
};
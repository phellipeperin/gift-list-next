export enum MessageType {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

interface FeedbackMessage {
  message: string;
  type: MessageType;
}

export default FeedbackMessage;

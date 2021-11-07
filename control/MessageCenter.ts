class MessageCenter {
  private pip: [];
  emit(message: { type: string; content: any }) {}
  subscribe(type: string) {}
}

const mc = new MessageCenter();
export default mc;

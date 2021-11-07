class MessageCenter {
  private pip: [];
  private target = new EventTarget();

  emit(type: string, detail: any) {
    const e = new CustomEvent(type, { detail });
    this.target.dispatchEvent(e);
  }

  subscribe(type: string) {
    this.target.addEventListener;
  }
}

const mc = new MessageCenter();
export default mc;

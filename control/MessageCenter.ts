class MessageCenter {
  private target = new EventTarget();

  emit(type: string, detail: any) {
    const e = new CustomEvent(type, { detail });
    this.target.dispatchEvent(e);
  }

  subscribe(type: string, cb: (d: any) => void) {
    this.target.addEventListener(type, cb);
  }

  unsubscribe(type: string, cb: (d: any) => void) {
    this.target.removeEventListener(type, cb);
  }
}

const mc = new MessageCenter();
export default mc;

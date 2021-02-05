export async function delay(time: number) {
  return new Promise(res => setTimeout(() => res(true), time));
}

export async function oneSecondDelay() {
  return new Promise(res => setTimeout(() => res(true), 1000));
}

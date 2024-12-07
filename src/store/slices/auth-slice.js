export const createAuthSlice = (set) => ({
  userInfo: undefined,
  isLogin: localStorage.getItem('isLogin') === 'true',
  setUserInfo: (userInfo) => set({ userInfo }),
  setIsLogin: (isLogin) => {
    set({ isLogin }); 
    localStorage.setItem('isLogin', isLogin.toString()); 
  },
});

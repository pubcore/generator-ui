import S from 'pubcore-state'
const sk = 'uri.basePath'

export const getHomeUri = () => S(sk) + '/home'

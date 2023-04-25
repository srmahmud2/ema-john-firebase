/**
 * age 1-5 porjonto ache, basic firebase open realted
 * 6. create sign up and login route
 */
/**
 * - to develop  context api -
 * 1. create folder named as providers in components folder
 * 2. create file in the provider folder as AuthProvider.jsx
 * 3. ekta constant nite hobe AuthContext name jar value createContext react router theke importo korte hobe plus initial value hobe null
 * 4. tarpor return er vitor prothom div tkae palte <AuthContext.Provider></AuthContext.Provider> korte hobe.
 *5. ebar return er upore AuthProvder function parameter hisabe diconstruct kore {children} nibo.
 * 6. tarpor <AuthContext.Provider>{children}</AuthContext.Provider> er peter vitor {children} nibo
 * 7. tarpor AuthProvider function e notun constant authInfo name nibo. ja prthome hobe ket empty object. const authInfo={}
 * 8. tarpor ei authInfo constant ta valule hisabe <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> er vitor pass kore dibo.
 * 9. tarpor final step hisabe main.jsx e giye, jehetu pura app tai authentication par hoyye use hok chai, tai <RouterProvivder router={router}/> eTak <AuthProvder></AuthProvder> ere peter vitor nibo.
 * 10 ebar use korar pala. tar jonno AuthProvider.js file e AuthProvider function er vitor arekta consntant nilam user name. and ekta kalponik vlaue dileam const user = {displayName: 'user Name'}. tarpor authInfo object er vitor oi user ta access koralm. const authInfo = {user, }. bes kaj sesh. ekhon pura application er jekono jaygay ei value access kora jabe. n jemon
 * 10. Header.jsx ei giye Header funciton er vitor object hisabe age destructure korbo ebave. const {} useContext(Auth)
 * 11. tobe tar agei obossoi AuthProvider.jsx file e giye AuthContext ta ke export kore ashte hobe na hole header theke ba onno kothao thek epawa jabe na.
 *12. tarmane AuthContext ta ebar header er moddhe chole ashleo ekhon ja ja dorkar segula eke eke deconstruct kore nibo jemon const { user } = useContext(AuthContext);
 13. ekhon ei user tao kothao dekhay dite parei evabe. {user && <span>Welcome {user.displayName}</span>} kheyal korte hobe direct user object use kora jabe na. user obj er vitor je displayName ba kono item acche tar key dhore access korte hobe.
 */

/**
 * 1. ebar auth develop korbo
 * 2. fire base theke import { getAuth } from "firebase/auth"; copy kore AuthProvider.jsx upore paset korb.
 */

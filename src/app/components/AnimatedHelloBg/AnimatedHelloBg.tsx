export default function AnimatedHelloBg() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundPosition: 'center',
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1024%26quot%3b)' fill='none'%3e%3cpath d='M54.493%2c126.313C84.077%2c128.67%2c118.265%2c125.58%2c133.278%2c99.98C148.392%2c74.208%2c134.104%2c43.003%2c118.172%2c17.728C103.562%2c-5.449%2c81.886%2c-25.517%2c54.493%2c-25.004C27.785%2c-24.504%2c7.205%2c-3.628%2c-5.188%2c20.036C-16.61%2c41.846%2c-17.241%2c67.482%2c-5.186%2c88.949C7.131%2c110.882%2c29.417%2c124.315%2c54.493%2c126.313' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M42.20294676200083 187.2701929006354L172.76346828677197 81.54436720426276-63.522878934371825 56.709671375864275z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M124.9%2c281.479C180.103%2c285.091%2c230.44%2c249.706%2c257.446%2c201.425C283.823%2c154.267%2c284.546%2c94.961%2c254.254%2c50.217C226.851%2c9.741%2c173.776%2c5.049%2c124.9%2c5.644C77.441%2c6.222%2c24.882%2c12.35%2c0.891%2c53.303C-23.275%2c94.556%2c-3.494%2c143.84%2c19.336%2c185.847C43.636%2c230.559%2c74.12%2c278.157%2c124.9%2c281.479' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1413.6920243128338-72.61028696969889L1271.2199441585542 16.41614942147953 1360.2463805497327 158.88822957575906 1502.7184607040122 69.86179318458066z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1349.837628980119 183.49570435321428L1495.3298968159047 99.49570435321421 1411.3298968159045-45.99656348257142 1265.837628980119 38.00343651742864z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1308.363309787943 122.2116302673046L1408.1560404970403 173.05856623813384 1434.5300790987355-2.0539978109266173z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M76.832%2c610.976C108.777%2c610.574%2c140.5%2c598.478%2c156.835%2c571.022C173.51%2c542.995%2c172.056%2c507.495%2c154.902%2c479.759C138.578%2c453.364%2c107.866%2c441.895%2c76.832%2c441.663C45.319%2c441.428%2c13.629%2c451.986%2c-3.281%2c478.579C-21.41%2c507.088%2c-24.227%2c544.176%2c-6.736%2c573.081C10.236%2c601.129%2c44.052%2c611.389%2c76.832%2c610.976' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M142.59537380813188 404.3834177596314L-24.99538663551857 416.1025053486445-13.2762990465055 583.6932657922949 154.31446139714495 571.9741782032819z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M123.98155752979065 390.85968862493803L-39.02812448457675 431.50256708568224 1.6147539761674636 594.5122491000496 164.62443599053486 553.8693706393054z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1284.7696304711608 520.0693077653929L1342.4538948610868 616.0720454440295 1457.6158691840785 481.54428001982205z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1447.9916050779898 619.4439114971631L1494.2986808552457 457.9519465795255 1332.806715937608 411.6448708022697 1286.499640160352 573.1368357199073z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1296.295355393315 472.078119956271L1422.2418356416185 617.242148641668 1479.7012197203308 459.3737883496354z' fill='rgba(92%2c 128%2c 230%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1024'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
        `,
      }}
    ></div>
  )
}

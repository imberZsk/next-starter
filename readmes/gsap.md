# 注意点

图片需要设置宽高，否则影响 gsap 设置动画

加上 scrub 可以达到更丝滑的效果

在组件卸载时清除 scrollTrigger 动画 kill

# 实例上的方法

to：将元素从当前状态动画到指定状态。

from：将元素从指定状态动画到当前状态。

set：设置元素的 CSS 属性或 JavaScript 对象的属性。

staggerTo：按照指定的延迟时间和持续时间，逐个动画元素。

staggerFrom：按照指定的延迟时间和持续时间，逐个动画元素从指定状态到当前状态。

kill：停止动画实例，并清除所有的事件监听器和引用。

pause：暂停动画实例。

resume：恢复动画实例。

restart：重新开始动画实例。

reverse：反转动画实例。

play：播放动画实例。

time：获取或设置动画实例的时间。

progress：获取或设置动画实例的进度。

eventCallback：设置动画实例的回调函数。

addLabel

# timeline

duration：动画持续时间

timeScale：时间缩放比例

repeat：重复次数

yoyo：反向播放

delay：延迟时间

ease：缓动函数

stagger：动画延迟时间的间隔

currentTime：当前时间

progress：动画进度

paused：暂停状态

reversed：反向播放状态

totalProgress：动画总进度

totalDuration：总持续时间

align：动画对齐方式（不常用）

onStart：动画开始时的回调函数

onUpdate：动画更新时的回调函数

onComplete：动画完成时的回调函数

onStartParams：动画开始时的回调函数参数

onUpdateParams：动画更新时的回调函数参数

onCompleteParams：动画完成时的回调函数参数。

# scrollTrigger

trigger：触发 ScrollTrigger 的元素或选择器

start：动画开始位置，支持百分比、像素值和字符串值（如"top center"）

end：动画结束位置，支持百分比、像素值和字符串值（如"top center"）

scrub：是否启用 Scrubbing 效果，可以使动画跟随滚动条拖动而进行动态调整，回滚效果

markers：是否在页面上显示调试标记，用于调试和调整动画

pin：是否启用元素固定功能，可以使元素在滚动期间保持在某个位置

toggleActions：在滚动方向上切换动画的行为，如"play none reverse none"，toggleActions: 第一个值控制进入视窗时的行为，第二个值控制离开视窗时的行为，第三个值控制重新进入视窗时的行为，第四个值控制重新离开视窗时的行为

pinSpacing：元素固定时，是否在固定前或固定后添加间隔空间

onUpdate：动画更新时的回调函数

onEnter：元素进入视图时的回调函数

onEnterBack：元素从后面进入视图时的回调函数

onLeave：元素离开视图时的回调函数

onLeaveBack：元素从后面离开视图时的回调函数

once：是否只触发一次，即动画只执行一次

animation：动画对象，可以使用 TweenMax、TimelineMax 等 GSAP 动画对象

invalidateOnRefresh：是否在页面刷新时重新计算动画。

重点说一下 scrub

true：启用 Scrubbing 效果，可以使动画跟随滚动条拖动而进行动态调整。

false：禁用 Scrubbing 效果，动画只在滚动时按照预设的进度进行播放。

一个数字：表示 Scrubbing 的速度，数字越大，Scrubbing 越快。

# 介绍

## 项目背景

+ 目前用Excel排课，更新过程繁琐且易错；

+ 目前预科阶段公示课表是通过发布Excel的方式；

+ 目前 [工程师阶段课表系统](http://kb.siae.top) 是一个分组式图片展示网站，用于公示Excel制成的课表。使用时需要将Excel转为图片，再将图片上传至系统后台，虽在一定程度上改善了信息公示的效率，但仍然依托于Excel制作的课表。

::: tip
为了说明方便，本文档中，暂将Excel课表称为V1，将石墨文档为载体的课表称为V2，2021.3开始使用的工程师阶段课表称为V3，本系统称为V4。
:::

## 项目目标

### 对于教务科老师

+ 使用数据库管理可以极大地减少信息冗余，排课更加方便；

+ 会根据已有课程筛选教室，杜绝多节课同时排在同一教室的问题；

+ 信息变更即时生效，无需额外通知；

+ 当课程发生变动时，自动生成日志；

+ 教学计划(PDC)无需手动计算，系统自动生成；

+ 考试信息除了会展示在课表中，还会自动生成考试时间表，供师生查看。

### 对于同学、授课老师

在查看课表时，可以使用**日期**、**年级**与**分组**等筛选条件，减少无关信息。

### 配套功能

对于寻找教室**上自习的同学**，可以快速查看某个教室的上课情况。

可以根据筛选，查看与自己有关的课表改动通知。

## 技术栈

+ 文档使用 [`VuePress`](https://v2.vuepress.vuejs.org/zh/) + [`GitPage`](https://pages.github.com/)
+ 数据库设计使用 [`CHINER(元数建模)`](https://gitee.com/robergroup/chiner)
+ 前端使用 [`typescript`](https://www.typescriptlang.org/) + [`vue3`](https://vuejs.org/)+ [`vite`](https://vitejs.cn/)
+ 后端使用 [`django`](https://www.djangoproject.com/) + [`DRF`](https://www.django-rest-framework.org/)

## 声明

截至目前，本系统为 [17级-尹章程 (GitHub@laorange)](https://github.com/laorange) 独立开发，若在使用过程中遇到问题，可联系微信号 `laorange6666` 或 邮箱 `laorange6666@qq.com`。

## 致谢

在开发过程中，感谢 [阿诺Eno](https://github.com/Eno-CN) 提供了诸多建议，并通过搭建更加专业的服务器环境，显著提升了系统的响应速度与稳定性，在此表示由衷的感谢！